import os
import re

# Rutas
html_path = r'C:\Users\Matias\Desktop\Galia\01galia\prueba\principalnuevo.html'
output_file = r'salida_completa.txt'

def read_file_content(file_path):
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            return f.read()
    except Exception as e:
        print(f"Error al leer el archivo {file_path}: {e}")
        return None

def read_js_files(base_dir, js_files):
    js_contents = {}
    for js_file in js_files:
        full_path = os.path.join(base_dir, js_file)
        content = read_file_content(full_path)
        if content is not None:
            js_contents[js_file] = content
        else:
            print(f"No se pudo leer el archivo JavaScript: {js_file}")
    return js_contents

def write_output(html_content, js_contents, output_path):
    with open(output_path, 'w', encoding='utf-8') as out:
        # Escribir encabezado
        out.write("=== CONTENIDO COMPLETO DEL SITIO WEB ===\n\n")

        # Escribir HTML
        out.write("===== ARCHIVO HTML =====\n")
        out.write(html_content)
        out.write("\n\n")

        # Escribir archivos JavaScript
        for js_file, content in js_contents.items():
            out.write(f"===== JavaScript: {js_file} =====\n")
            out.write(content)
            out.write("\n\n")

    print(f"Archivo generado en: {output_path}")

if __name__ == '__main__':
    base_dir = os.path.dirname(html_path)
    
    # Lista de archivos JavaScript locales
    js_files = [
        'js/particlespropio.js',
        'js/principalnuevo.js',
        'js/countdown.js',
        'js/principaldetalle.js',
        'js/modalconfirmar.js',
        'js/modalsobremi.js'
    ]

    # Leer el contenido del HTML principal
    html_content = read_file_content(html_path)
    if html_content is None:
        print("Error al leer el archivo HTML principal")
        exit(1)

    # Leer el contenido de los archivos JavaScript
    js_contents = read_js_files(base_dir, js_files)

    # Escribir resultado final
    write_output(html_content, js_contents, output_file)