import os

# Definir la ruta al archivo HTML
html_file_path = r'C:\Users\Matias\Desktop\Galia\01galia\principalnuevo.html'

# Archivos JS asociados que se encuentran en la misma carpeta o subcarpetas
js_files = [
    'js/particlespropio.js',
    'js/principalnuevo.js',
    'js/countdown.js',
    'js/principaldetalle.js',
    'js/modalconfirmar.js',
    'js/modalsobremi.js'
]

# Ruta de salida para guardar el archivo .txt
output_txt_path = r'C:\Users\Matias\Desktop\Galia\01galia\contenido_completo.txt'

def read_file(file_path):
    """Función para leer el contenido de un archivo y devolverlo"""
    with open(file_path, 'r', encoding='utf-8') as file:
        return file.read()

# Abrir el archivo HTML
html_content = read_file(html_file_path)

# Crear y abrir el archivo de salida en modo de escritura
with open(output_txt_path, 'w', encoding='utf-8') as output_file:
    # Escribir el contenido HTML en el archivo de salida
    output_file.write("Contenido del archivo HTML:\n")
    output_file.write(html_content)
    output_file.write("\n\n")  # Separador

    # Escribir el contenido de cada archivo JS en el archivo de salida
    for js_file in js_files:
        js_file_path = os.path.join(os.path.dirname(html_file_path), js_file)
        
        # Comprobar si el archivo JS existe
        if os.path.exists(js_file_path):
            output_file.write(f"Contenido del archivo JavaScript: {js_file}\n")
            js_content = read_file(js_file_path)
            output_file.write(js_content)
            output_file.write("\n\n")
        else:
            output_file.write(f"El archivo JavaScript {js_file} no se encontró.\n\n")

print(f"El contenido ha sido guardado en {output_txt_path}")
