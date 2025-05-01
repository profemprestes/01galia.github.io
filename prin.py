import os

# Diccionario con los archivos a procesar
archivos = {
    "Carga.astro": {
        "html": "base.html",
        "css": ["css/global.css"],
        "js": ["js/particlespropio.js"]
    },
    "Intro.astro": {
        "html": "introinvitacion.html",
        "css": ["css/introinvitacion.css"],
        "js": []
    },
    "Principal.astro": {
        "html": "principalnuevo.html",
        "css": [
            "css/principalnuevo.css",
            "css/countdown.css",
            "css/principaldetalle.css"
        ],
        "js": []
    }
}

def leer_archivo(ruta):
    """Lee el contenido de un archivo"""
    try:
        with open(ruta, 'r', encoding='utf-8') as f:
            return f.read()
    except FileNotFoundError:
        return f"⚠️ Archivo no encontrado: {ruta}\n"
    except Exception as e:
        return f"⚠️ Error al leer {ruta}: {str(e)}\n"

def generar_contenido():
    """Genera el contenido completo para el archivo TXT"""
    contenido = ""
    
    for nombre, archs in archivos.items():
        contenido += f"\n{'='*50}\n"
        contenido += f"ARCHIVO: {nombre}\n"
        contenido += f"{'='*50}\n\n"
        
        # Procesar HTML
        html_path = os.path.join(os.getcwd(), archs["html"])
        contenido += f"=== HTML: {archs['html']} ===\n"
        contenido += leer_archivo(html_path)
        contenido += "\n\n"
        
        # Procesar CSS
        if archs["css"]:
            contenido += "=== ARCHIVOS CSS ===\n"
            for css in archs["css"]:
                css_path = os.path.join(os.getcwd(), css)
                contenido += f"--- {css} ---\n"
                contenido += leer_archivo(css_path)
                contenido += "\n"
        
        # Procesar JS
        if archs["js"]:
            contenido += "\n=== ARCHIVOS JS ===\n"
            for js in archs["js"]:
                js_path = os.path.join(os.getcwd(), js)
                contenido += f"--- {js} ---\n"
                contenido += leer_archivo(js_path)
                contenido += "\n"
        
        contenido += "\n"
    
    return contenido

def guardar_resultado(contenido):
    """Guarda el contenido en un archivo TXT"""
    output_path = os.path.join(os.getcwd(), "contenido_archivos.txt")
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(contenido)
    print(f"✅ Archivo generado exitosamente en: {output_path}")

if __name__ == "__main__":
    contenido = generar_contenido()
    guardar_resultado(contenido)