const TT = "s11e4deb4ea4ed1d0";
const SP = "s5b4e274c98b1900a";

function jim(
  site: string,
  id: string,
  version: string,
  opts: { rotate?: 90 | 180; background?: boolean; size?: number } = {},
) {
  const size = opts.size ?? 1400;
  const rotate = opts.rotate ? `:rotate=${opts.rotate}` : "";
  const kind = opts.background ? "backgroundarea" : "image";
  return `https://image.jimcdn.com/app/cms/image/transf/dimension=${size}x${size}:format=jpg${rotate}/path/${site}/${kind}/${id}/version/${version}/image.jpg`;
}

export const photos = {
  musicLogo: jim(TT, "ie27a3bede53ca620", "1543615951", { size: 800 }),
  musicHero: jim(TT, "i106600b7c43b97c6", "1543495793", { background: true, size: 2000 }),
  musicPortrait: `https://image.jimcdn.com/app/cms/image/transf/none/path/${TT}/image/ic09b5525f43ad3c4/version/1543603589/image.jpg`,
  bookGehoer: `https://image.jimcdn.com/app/cms/image/transf/none/path/${TT}/image/ic636722b786eda15/version/1543621331/image.jpg`,
  bookUeben: `https://image.jimcdn.com/app/cms/image/transf/none/path/${TT}/image/i5a8af187604b8332/version/1543621331/image.jpg`,
  tattva: jim(TT, "if290ea61f853b1fa", "1543621331"),
  miauTruppe: jim(TT, "i3059d28630015220", "1750153240"),
  musicCats: jim(TT, "ie04a06d00ed8fc07", "1543689917"),
  spiritLogo: `https://image.jimcdn.com/app/cms/image/transf/none/path/${SP}/image/idef1e10e62dee93a/version/1542891099/image.jpg`,
  spiritHero: jim(SP, "i6ba13e9d5853cb0c", "1778842286", { size: 2000 }),
  spiritMoai: jim(SP, "i932ad57424ce5281", "1778587736", { size: 2000 }),
  bookUniversum: jim(SP, "ic157f0ac981a3309", "1542840452"),
  bookSchamanin: jim(SP, "i08a5ccf05564fd42", "1542892467"),
  diesseits1: jim(SP, "i876ea6a88f812824", "1542924218"),
  diesseits2: jim(SP, "id311200f457c16fd", "1542899866"),
  diesseits3: jim(SP, "i036fe2c84f1b5686", "1696068892"),
  diesseits4: jim(SP, "i9d1bb43a7f6f87dc", "1568535740"),
  jenseits1: jim(SP, "i9628d50df47e3d38", "1542926948"),
  jenseits2: jim(SP, "i7df6a1f960a81242", "1543016834"),
  jenseits3: jim(SP, "i0c511fc3e61e35c9", "1543016940"),
  jenseits4: jim(SP, "if9ee10e62dca7a6f", "1543016988"),
  katzenHero: jim(SP, "i9753588d403a2f98", "1778179619"),
};
