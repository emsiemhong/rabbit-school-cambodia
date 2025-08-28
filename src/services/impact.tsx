



// src/services/impact.ts
// export async function getImpactData() {
//   const apiUrl = process.env.NEXT_PUBLIC_API_URL; 

//   const res = await fetch(`${apiUrl}/api/homes`, {
//     cache: "no-store",
//   });

//   if (!res.ok) {
//     throw new Error("Failed to fetch impact data");
//   }

//   const data = await res.json();

//   return data.data.map((item: any) => {
//     // remove "+" and convert to number
//     const value = parseInt(item.total.replace("+", ""), 10);

//     return {
//       value,
//       description: item.description,
//     };
//   });
// }

export async function getImpactData(locale: string = "en") {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  const res = await fetch(`${apiUrl}/api/homes?locale=${locale}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch impact data");
  }

  const data = await res.json();

  return data.data.map((item: any) => {
    const value = parseInt(item.total.replace("+", ""), 10);

    return {
      value,
      description: item.description,
    };
  });
}

