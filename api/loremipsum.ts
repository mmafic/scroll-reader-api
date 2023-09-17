import type { VercelRequest, VercelResponse } from '@vercel/node'

export default function handler(req: VercelRequest, res: VercelResponse) {
  return res.json({
    "backgroundUrl": "https://...",
    "fontUrl": "https://...",
    "images": [null, null, null, "https://imageA", "https://imageA", "https://imageB", null],
    "text": [
      "lorem ipsum...",
      "more text...",
      "another paragraph...",
      "paragraph the image appears...",
      "same image stays...",
      "new image is shown...",
      "image disappears"
    ]
  })
}
