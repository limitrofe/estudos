# AI/PDF to editable EMF

This project keeps the conversion pipeline explicit:

1. Import Illustrator-compatible AI/PDF with Inkscape/Poppler.
2. Export an intermediate SVG.
3. Normalize the SVG without flattening fills/strokes.
4. Export EMF.
5. Return the EMF as a browser download with `Content-Type: image/x-emf`.

The important part is that EMF must contain vector records. Changing a MIME type does not convert AI/PDF artwork into editable EMF.

## Local flow

Install Inkscape first. On macOS, install the app from:

```text
https://inkscape.org/release/
```

Then run:

```bash
npm run app
npm run convert -- matriz.ai output
```

Open the local UI at:

```text
http://localhost:3000
```

Generated files:

```text
output/matriz.raw.svg
output/matriz.editable.svg
output/matriz.emf
```

Open/import the downloaded EMF in the target editor and test whether shapes can be selected and recolored. If the report warns about raster images, masks, filters, gradients, or opacity, that part of the artwork may be flattened.

## Worker for Vercel

Do not put Inkscape inside a Vercel Function for the first production version. Keep Vercel as the app/orchestrator and run conversion in a Docker worker.

```bash
docker build -f Dockerfile.worker -t vector-to-emf-worker .
docker run --rm -p 3001:3001 vector-to-emf-worker
```

Convert via HTTP:

```bash
curl -F "file=@matriz.ai" http://localhost:3001/convert --output matriz.emf
```

Recommended deployed shape:

```text
Next.js on Vercel
  user uploads AI/PDF
  stores source in Vercel Blob
  calls conversion worker
  returns EMF as a download

Docker worker
  runs Inkscape + pstoedit
  returns EMF bytes
```

The current Express UI is the prototype for the future Vercel app: `app-server.js` owns the upload screen and download response; `worker-server.js` owns only the heavy conversion.

On Vercel, the deployed API is implemented with serverless functions under `api/`:

```text
api/status.js
api/generate.js
```
