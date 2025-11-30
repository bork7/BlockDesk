const PINATA_JWT = import.meta.env.VITE_PINATA_JWT;
const PINATA_GATEWAY =
  import.meta.env.VITE_PINATA_GATEWAY ||
  "https://emerald-elegant-wolf-980.mypinata.cloud/ipfs/";

export async function uploadToIPFS(file: File) {
  if (!PINATA_JWT) throw new Error("Missing Pinata JWT");

  const form = new FormData();
  form.append("file", file);

  const res = await fetch("https://api.pinata.cloud/pinning/pinFileToIPFS", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${PINATA_JWT}`,
    },
    body: form,
  });

  if (!res.ok) throw new Error("Pinata file upload failed");

  const data = await res.json();
  return {
    hash: data.IpfsHash,
    url: `${PINATA_GATEWAY}${data.IpfsHash}`,
  };
}

export async function uploadTextToIPFS(text: string) {
  if (!PINATA_JWT) throw new Error("Missing Pinata JWT");

  const blob = new Blob([text], { type: "text/plain" });
  const form = new FormData();
  form.append("file", blob, "content.txt");

  const res = await fetch("https://api.pinata.cloud/pinning/pinFileToIPFS", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${PINATA_JWT}`,
    },
    body: form,
  });

  if (!res.ok) throw new Error("Pinata text upload failed");

  const data = await res.json();
  return {
    hash: data.IpfsHash,
    url: `${PINATA_GATEWAY}${data.IpfsHash}`,
  };
}

export function getIPFSUrl(hash: string): string {
  if (!hash) return "";
  if (hash.startsWith("http")) return hash;
  return `${PINATA_GATEWAY}${hash.replace("ipfs://", "")}`;
}

export function isIPFSHash(str: string): boolean {
  return /^Qm[1-9A-Za-z]{44}|bafy[A-Za-z0-9]{50,}/.test(str);
}
