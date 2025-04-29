import os
import re

# Rutas
html_path = r'C:\Users\Matias\Desktop\Galia\01galia\prueba\principalnuevo.html'
output_file = r'salida_completa.txt'

# Extensiones de archivos a leer
local_js_css_pattern = {
    'js': re.compile(r'<script[^>]+src="([^"]+\.js)"'),
    'css': re.compile(r'<link[^>]+href="([^"]+\.css)"')
}

def read_local_files(html_content, base_dir):
    referenced_files = {'js': set(), 'css': set()}

    # Buscar archivos JS y CSS locales
    for ext, pattern in local_js_css_pattern.items():
        for match in pattern.findall(html_content):
            if not match.startswith(('http://', 'https://')):
                referenced_files[ext].add(match)

    # Leer el contenido de cada archivo
    file_contents = {}

    for ext, files in referenced_files.items():
        for relative_path in files:
            full_path = os.path.join(base_dir, relative_path)
            if os.path.exists(full_path):
                with open(full_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                    file_contents[relative_path] = {
                        'type': ext,
                        'content': content
                    }
            else:
                print(f"Archivo no encontrado: {full_path}")

    return file_contents

def write_output(html_content, file_data, output_path):
    with open(output_path, 'w', encoding='utf-8') as out:
        # Escribir encabezado
        out.write("=== CONTENIDO COMPLETO DEL SITIO WEB ===\n\n")

        # Escribir HTML
        out.write("===== ARCHIVO HTML =====\n")
        out.write(html_content)
        out.write("\n\n")

        # Escribir archivos JS y CSS
        for path, data in file_data.items():
            out.write(f"===== {data['type'].upper()}: {path} =====\n")
            out.write(data['content'])
            out.write("\n\n")

    print(f"Archivo generado en: {output_path}")

if __name__ == '__main__':
    base_dir = os.path.dirname(html_path)

    # Leer el contenido del HTML principal
    try:
        with open(html_path, 'r', encoding='utf-8') as f:
            html_content = f.read()
    except Exception as e:
        print(f"Error al leer el archivo HTML: {e}")
        exit(1)

    # Obtener los contenidos de los archivos JS y CSS locales
    file_data = read_local_files(html_content, base_dir)

    # Escribir resultado final
    write_output(html_content, file_data, output_file)