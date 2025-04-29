import os

def read_file(file_path):
    """Función para leer el contenido de un archivo"""
    try:
        with open(file_path, 'r', encoding='utf-8') as file:
            return file.read()
    except Exception as e:
        return f"Error al leer el archivo {file_path}: {str(e)}"

def save_contents():
    # Definir las rutas de los archivos
    base_dir = r"C:\Users\Matias\Desktop\Galia\01galia\prueba"
    
    # Lista de archivos CSS y JS a leer
    files_to_read = {
        'HTML': os.path.join(base_dir, 'base.html'),
        'CSS - global': os.path.join(base_dir, 'css', 'global.css'),
        'CSS - hero': os.path.join(base_dir, 'css', 'hero.css'),
        'CSS - countdown': os.path.join(base_dir, 'css', 'countdown.css'),
        'CSS - detalles': os.path.join(base_dir, 'css', 'detalles.css'),
        'CSS - modal': os.path.join(base_dir, 'css', 'modal.css'),
        'JS - particles': os.path.join(base_dir, 'js', 'particlespropio.js'),
        'JS - hero': os.path.join(base_dir, 'js', 'hero.js'),
        'JS - countdown': os.path.join(base_dir, 'js', 'countdown.js'),
        'JS - detalles': os.path.join(base_dir, 'js', 'detalles.js')
    }
    
    # Crear el archivo de salida
    output_path = os.path.join(base_dir, 'contenido_archivos.txt')
    
    with open(output_path, 'w', encoding='utf-8') as output_file:
        # Escribir encabezado
        output_file.write("=== CONTENIDO COMPLETO DEL SITIO WEB ===\n\n")

        # Leer y escribir cada archivo
        for file_type, file_path in files_to_read.items():
            output_file.write(f"\n{'='*50}\n")
            output_file.write(f"Contenido del archivo {file_type}:\n")
            output_file.write(f"Ruta: {file_path}\n")
            output_file.write(f"{'='*50}\n\n")
            
            content = read_file(file_path)
            output_file.write(content)
            output_file.write("\n\n")
    
    print(f"Los contenidos han sido guardados en: {output_path}")

if __name__ == "__main__":
    save_contents()