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

def read_css_files(base_dir, css_files):
    css_contents = {}
    for css_file in css_files:
        full_path = os.path.join(base_dir, css_file)
        content = read_file_content(full_path)
        if content is not None:
            css_contents[css_file] = content
        else:
            print(f"No se pudo leer el archivo CSS: {css_file}")
    return css_contents

def write_output(html_content, css_contents, output_path):
    with open(output_path, 'w', encoding='utf-8') as out:
        # Escribir encabezado
        out.write("=== CONTENIDO COMPLETO DEL SITIO WEB ===\n\n")

        # Escribir HTML
        out.write("===== ARCHIVO HTML =====\n")
        out.write(html_content)
        out.write("\n\n")

        # Escribir archivos CSS
        for css_file, content in css_contents.items():
            out.write(f"===== CSS: {css_file} =====\n")
            out.write(content)
            out.write("\n\n")

    print(f"Archivo generado en: {output_path}")

if __name__ == '__main__':
    base_dir = os.path.dirname(html_path)
    
    # Lista de archivos CSS locales
    css_files = [
        'css/global.css',
        'css/principalnuevo.css',
        'css/countdown.css',
        'css/principaldetalle.css',
        'css/modalconfirmar.css',
        'css/modalsobremi.css'
    ]

    # Leer el contenido del HTML principal
    html_content = read_file_content(html_path)
    if html_content is None:
        print("Error al leer el archivo HTML principal")
        exit(1)

    # Leer el contenido de los archivos CSS
    css_contents = read_css_files(base_dir, css_files)

    # Escribir resultado final
    write_output(html_content, css_contents, output_file)