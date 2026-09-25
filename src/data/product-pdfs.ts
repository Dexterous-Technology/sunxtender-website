import type { Product } from "./products";

// Part-number keyed PDF asset pointers. Keys are uppercased part numbers.
import da_PVX_1030T from "@/assets/datasheets/PVX-1030T.pdf.asset.json";
import da_PVX_1040T from "@/assets/datasheets/PVX-1040T.pdf.asset.json";
import da_PVX_1080T from "@/assets/datasheets/PVX-1080T.pdf.asset.json";
import da_PVX_1180T from "@/assets/datasheets/PVX-1180T.pdf.asset.json";
import da_PVX_12150HT from "@/assets/datasheets/PVX-12150HT.pdf.asset.json";
import da_PVX_1290T from "@/assets/datasheets/PVX-1290T.pdf.asset.json";
import da_PVX_1380T from "@/assets/datasheets/PVX-1380T.pdf.asset.json";
import da_PVX_1530T from "@/assets/datasheets/PVX-1530T.pdf.asset.json";
import da_PVX_2120L from "@/assets/datasheets/PVX-2120L.pdf.asset.json";
import da_PVX_2240T from "@/assets/datasheets/PVX-2240T.pdf.asset.json";
import da_PVX_2560T from "@/assets/datasheets/PVX-2560T.pdf.asset.json";
import da_PVX_2580L from "@/assets/datasheets/PVX-2580L.pdf.asset.json";
import da_PVX_3050T from "@/assets/datasheets/PVX-3050T.pdf.asset.json";
import da_PVX_340T from "@/assets/datasheets/PVX-340T.pdf.asset.json";
import da_PVX_4050HT from "@/assets/datasheets/PVX-4050HT.pdf.asset.json";
import da_PVX_420T from "@/assets/datasheets/PVX-420T.pdf.asset.json";
import da_PVX_490T from "@/assets/datasheets/PVX-490T.pdf.asset.json";
import da_PVX_5340T from "@/assets/datasheets/PVX-5340T.pdf.asset.json";
import da_PVX_560T from "@/assets/datasheets/PVX-560T.pdf.asset.json";
import da_PVX_6480T from "@/assets/datasheets/PVX-6480T.pdf.asset.json";
import da_PVX_6720T from "@/assets/datasheets/PVX-6720T.pdf.asset.json";
import da_PVX_690T from "@/assets/datasheets/PVX-690T.pdf.asset.json";
import da_PVX_7680T from "@/assets/datasheets/PVX-7680T.pdf.asset.json";
import da_PVX_840T from "@/assets/datasheets/PVX-840T.pdf.asset.json";
import da_PVX_890T from "@/assets/datasheets/PVX-890T.pdf.asset.json";
import da_PVX_9150T from "@/assets/datasheets/PVX-9150T.pdf.asset.json";
import ou_PVX_1030T from "@/assets/outlines/PVX-1030T.pdf.asset.json";
import ou_PVX_1040T from "@/assets/outlines/PVX-1040T.pdf.asset.json";
import ou_PVX_1080T from "@/assets/outlines/PVX-1080T.pdf.asset.json";
import ou_PVX_1180T from "@/assets/outlines/PVX-1180T.pdf.asset.json";
import ou_PVX_12150HT from "@/assets/outlines/PVX-12150HT.pdf.asset.json";
import ou_PVX_1290T from "@/assets/outlines/PVX-1290T.pdf.asset.json";
import ou_PVX_1380T from "@/assets/outlines/PVX-1380T.pdf.asset.json";
import ou_PVX_1530T from "@/assets/outlines/PVX-1530T.pdf.asset.json";
import ou_PVX_2120L from "@/assets/outlines/PVX-2120L.pdf.asset.json";
import ou_PVX_2240T from "@/assets/outlines/PVX-2240T.pdf.asset.json";
import ou_PVX_2560T from "@/assets/outlines/PVX-2560T.pdf.asset.json";
import ou_PVX_2580L from "@/assets/outlines/PVX-2580L.pdf.asset.json";
import ou_PVX_3050T from "@/assets/outlines/PVX-3050T.pdf.asset.json";
import ou_PVX_340T from "@/assets/outlines/PVX-340T.pdf.asset.json";
import ou_PVX_4050HT from "@/assets/outlines/PVX-4050HT.pdf.asset.json";
import ou_PVX_420T from "@/assets/outlines/PVX-420T.pdf.asset.json";
import ou_PVX_490T from "@/assets/outlines/PVX-490T.pdf.asset.json";
import ou_PVX_5340T from "@/assets/outlines/PVX-5340T.pdf.asset.json";
import ou_PVX_560T from "@/assets/outlines/PVX-560T.pdf.asset.json";
import ou_PVX_6480T from "@/assets/outlines/PVX-6480T.pdf.asset.json";
import ou_PVX_6720T from "@/assets/outlines/PVX-6720T.pdf.asset.json";
import ou_PVX_690T from "@/assets/outlines/PVX-690T.pdf.asset.json";
import ou_PVX_7680T from "@/assets/outlines/PVX-7680T.pdf.asset.json";
import ou_PVX_840T from "@/assets/outlines/PVX-840T.pdf.asset.json";
import ou_PVX_890T from "@/assets/outlines/PVX-890T.pdf.asset.json";
import ou_PVX_9150T from "@/assets/outlines/PVX-9150T.pdf.asset.json";

export const DATASHEET_PDFS: Record<string, string> = {
  "PVX-1030T": da_PVX_1030T.url,
  "PVX-1040T": da_PVX_1040T.url,
  "PVX-1080T": da_PVX_1080T.url,
  "PVX-1180T": da_PVX_1180T.url,
  "PVX-12150HT": da_PVX_12150HT.url,
  "PVX-1290T": da_PVX_1290T.url,
  "PVX-1380T": da_PVX_1380T.url,
  "PVX-1530T": da_PVX_1530T.url,
  "PVX-2120L": da_PVX_2120L.url,
  "PVX-2240T": da_PVX_2240T.url,
  "PVX-2560T": da_PVX_2560T.url,
  "PVX-2580L": da_PVX_2580L.url,
  "PVX-3050T": da_PVX_3050T.url,
  "PVX-340T": da_PVX_340T.url,
  "PVX-4050HT": da_PVX_4050HT.url,
  "PVX-420T": da_PVX_420T.url,
  "PVX-490T": da_PVX_490T.url,
  "PVX-5340T": da_PVX_5340T.url,
  "PVX-560T": da_PVX_560T.url,
  "PVX-6480T": da_PVX_6480T.url,
  "PVX-6720T": da_PVX_6720T.url,
  "PVX-690T": da_PVX_690T.url,
  "PVX-7680T": da_PVX_7680T.url,
  "PVX-840T": da_PVX_840T.url,
  "PVX-890T": da_PVX_890T.url,
  "PVX-9150T": da_PVX_9150T.url,
};

export const OUTLINE_PDFS: Record<string, string> = {
  "PVX-1030T": ou_PVX_1030T.url,
  "PVX-1040T": ou_PVX_1040T.url,
  "PVX-1080T": ou_PVX_1080T.url,
  "PVX-1180T": ou_PVX_1180T.url,
  "PVX-12150HT": ou_PVX_12150HT.url,
  "PVX-1290T": ou_PVX_1290T.url,
  "PVX-1380T": ou_PVX_1380T.url,
  "PVX-1530T": ou_PVX_1530T.url,
  "PVX-2120L": ou_PVX_2120L.url,
  "PVX-2240T": ou_PVX_2240T.url,
  "PVX-2560T": ou_PVX_2560T.url,
  "PVX-2580L": ou_PVX_2580L.url,
  "PVX-3050T": ou_PVX_3050T.url,
  "PVX-340T": ou_PVX_340T.url,
  "PVX-4050HT": ou_PVX_4050HT.url,
  "PVX-420T": ou_PVX_420T.url,
  "PVX-490T": ou_PVX_490T.url,
  "PVX-5340T": ou_PVX_5340T.url,
  "PVX-560T": ou_PVX_560T.url,
  "PVX-6480T": ou_PVX_6480T.url,
  "PVX-6720T": ou_PVX_6720T.url,
  "PVX-690T": ou_PVX_690T.url,
  "PVX-7680T": ou_PVX_7680T.url,
  "PVX-840T": ou_PVX_840T.url,
  "PVX-890T": ou_PVX_890T.url,
  "PVX-9150T": ou_PVX_9150T.url,
};

export function datasheetPdfUrl(p: Product): string | undefined {
  return DATASHEET_PDFS[(p.name ?? "").trim().toUpperCase()];
}

export function outlinePdfUrl(p: Product): string | undefined {
  return OUTLINE_PDFS[(p.name ?? "").trim().toUpperCase()];
}
