# VETOR-TO-EMF

Interface para converter arquivos Illustrator/PDF em EMF vetorial e devolver o download com MIME `image/x-emf`.

## Rodar local

Instale dependencias:

```bash
npm install
```

Instale o Inkscape:

```text
https://inkscape.org/release/
```

Rode a interface:

```bash
npm run app
```

Abra:

```text
http://localhost:3000
```

## Variaveis

```bash
MAX_UPLOAD_BYTES=52428800
CONVERSION_WORKER_URL=https://seu-worker.example.com
```

Na Vercel, configure:

```text
CONVERSION_WORKER_URL
```

Sem `CONVERSION_WORKER_URL`, a Vercel nao consegue converter porque nao tem Inkscape instalado. Localmente, se o Inkscape estiver instalado, o app converte sem worker.

## Worker Docker

Para producao, deixe a Vercel com a UI/orquestracao e rode a conversao pesada em um worker Docker com Inkscape.

```bash
docker build -f Dockerfile.worker -t vector-to-emf-worker .
docker run --rm -p 3001:3001 vector-to-emf-worker
```

Teste:

```bash
curl -F "file=@arte.ai" http://localhost:3001/convert --output arte.emf
```

## Seguranca

Nao commite artes `.ai` ou arquivos gerados `.emf`.
