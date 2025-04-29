import os

# Rutas
base_path = r"C:\Users\Matias\Desktop\Galia\01galia"
html_file = os.path.join(base_path, "principalnuevo.html")

# Archivos CSS y JS locales que mencionaste
css_files = [
    "css/global.css",
    "css/principalnuevo.css",
    "css/countdown.css",
    "css/principaldetalle.css",
    "css/modalconfirmar.css",
    "css/modalsobremi.css"
]

js_files = [
    "js/particlespropio.js",
    "js/principalnuevo.js",
    "js/countdown.js",
    "js/principaldetalle.js",
    "js/modalconfirmar.js",
    "js/modalsobremi.js"
]

# Resultado
output_txt = os.path.join(base_path, "resultado_completo.txt")

# Función para leer archivos
def leer_archivo(ruta):
    try:
        with open(ruta, 'r', encoding='utf-8') as f:
            return f.read()
    except FileNotFoundError:
        return f"// Archivo no encontrado: {ruta}\n"

# Escribir en el archivo de salida
with open(output_txt, 'w', encoding='utf-8') as out_file:
    # Leer y escribir el HTML principal
    out_file.write("<!-- Contenido de principalnuevo.html -->\n\n")
    out_file.write(leer_archivo(html_file))
    out_file.write("\n\n")

    # Leer y escribir los CSS
    for css in css_files:
        ruta_css = os.path.join(base_path, css)
        out_file.write(f"/* Contenido de {css} */\n\n")
        out_file.write(leer_archivo(ruta_css))
        out_file.write("\n\n")

    # Leer y escribir los JS
    for js in js_files:
        ruta_js = os.path.join(base_path, js)
        out_file.write(f"// Contenido de {js}\n\n")
        out_file.write(leer_archivo(ruta_js))
        out_file.write("\n\n")

print(f"Archivo generado exitosamente en {output_txt}")
