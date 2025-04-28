import re
import os

# Ruta del archivo HTML
ruta_html = r'C:\Users\Matias\Desktop\Galia\01galia\principal.html'

# Ruta del archivo de salida TXT
ruta_salida = r'C:\Users\Matias\Desktop\Galia\01galia\archivos_css_js_contenido.txt'

# Carpeta base (para buscar los archivos locales relativos)
base_dir = os.path.dirname(ruta_html)

# Leer el contenido del HTML
with open(ruta_html, 'r', encoding='utf-8') as archivo:
    contenido = archivo.read()

# Expresiones regulares para encontrar los CSS y JS
css_links = re.findall(r'<link[^>]+rel=["\']stylesheet["\'][^>]+href=["\']([^"\']+)["\']', contenido, re.IGNORECASE)
js_scripts = re.findall(r'<script[^>]+src=["\']([^"\']+)["\']', contenido, re.IGNORECASE)

# Función para obtener contenido de un archivo local
def leer_archivo_local(ruta_relativa):
    ruta_completa = os.path.join(base_dir, ruta_relativa.lstrip('/').replace('/', os.sep))
    if os.path.exists(ruta_completa):
        with open(ruta_completa, 'r', encoding='utf-8') as f:
            return f.read()
    else:
        return f'⚠️ No encontrado: {ruta_relativa}'

# Crear el contenido de salida
salida = []

salida.append('--- Archivos CSS ---')
for css in css_links:
    salida.append(f'Archivo: {css}')
    if css.startswith('http'):
        salida.append('(Remoto, contenido no descargado)')
    else:
        contenido_css = leer_archivo_local(css)
        salida.append('Contenido:')
        salida.append(contenido_css)
    salida.append('')  # línea en blanco para separación

salida.append('--- Archivos JS ---')
for js in js_scripts:
    salida.append(f'Archivo: {js}')
    if js.startswith('http'):
        salida.append('(Remoto, contenido no descargado)')
    else:
        contenido_js = leer_archivo_local(js)
        salida.append('Contenido:')
        salida.append(contenido_js)
    salida.append('')  # línea en blanco para separación

# Guardar el resultado en el archivo TXT
with open(ruta_salida, 'w', encoding='utf-8') as archivo_salida:
    archivo_salida.write('\n'.join(salida))

print(f'Proceso finalizado. Se guardó el listado en: {ruta_salida}')
