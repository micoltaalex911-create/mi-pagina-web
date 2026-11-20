# Credinova

Página de presentación de Credinova (Colombia): saneamiento y recuperación de vida crediticia.

Sitio estático. No requiere instalación ni servidor para abrirlo en el navegador.

## Estructura

```
credinova-web/
├── index.html          Página completa (secciones, textos y enlaces)
├── css/
│   └── styles.css      Estilos propios: fondo, animación de WhatsApp, acordeón
├── js/
│   ├── tailwind-config.js   Colores de marca, tipografía y sombras de Tailwind
│   └── main.js              Reservado para interacciones futuras
├── assets/
│   └── img/            Fotos y logo locales (hoy las imágenes siguen en sus URLs)
├── .gitignore
└── README.md
```

| Carpeta o archivo | Para qué sirve |
| --- | --- |
| `index.html` | El documento que abre el navegador. Contiene el contenido visible. |
| `css/` | Hojas de estilo que no vienen de Tailwind. |
| `js/` | Configuración de Tailwind y scripts propios. |
| `assets/img/` | Imágenes del sitio cuando las guardes en el proyecto (logo, foto del hero). |
| `.gitignore` | Le dice a Git qué no versionar (basura del sistema, `.env`, `node_modules`). |
| `README.md` | Esta guía. |

## Colores y tipografía

- Navy `#0B2545`, azul `#0A2E68`, dorado `#E5A93C`, WhatsApp `#25D366`
- Fuente: [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) (Google Fonts)
- Tailwind CSS v3 se carga por CDN, con los plugins `forms` y `container-queries`

## Cómo abrirla

1. Entra a la carpeta `credinova-web`.
2. Haz doble clic en `index.html`, o arrástralo a Chrome, Edge o Firefox.
3. Necesitas internet la primera vez: la fuente, Tailwind y las fotos se cargan desde fuera.

En PowerShell, desde esta carpeta:

```powershell
start index.html
```

## Crear la estructura a mano

Si partes de una carpeta vacía, en PowerShell:

```powershell
cd "C:\Users\jhon_premi_10\OneDrive - Comware S.A\Documentos\credinova-web"
mkdir css, js, assets\img
New-Item index.html, css\styles.css, js\tailwind-config.js, js\main.js, .gitignore, README.md
```

El orden en el `<head>` importa: primero el CDN de Tailwind y, justo después, `js/tailwind-config.js`.
