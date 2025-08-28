export const impactData = [
  {
    value: 4000,
    description: "Have benefited from our education programs since 2013",
  },
  {
    value: 500,
    description: "Students with intellectual disabilities and autism are currently enrolled in our school",
  },
  {
    value: 60,
    description: "Teachers have received training in special education",
  },
  {
    value: 200,
    description: "Classrooms in 16 schools are now inclusive learning environments for children with intellectual disabilities",
  },
];


// export type ImpactItem = {
//   value: number;
//   description: string;
// };

// export async function ImpactData(): Promise<ImpactItem[]> {
//   try {
//     const res = await fetch("http://localhost:3000/api/v1/impact", {
//       cache: "no-store", // 🔑 prevent caching (important for fresh data)
//     });

//     if (!res.ok) {
//       throw new Error("Failed to fetch impact data");
//     }

//     return res.json();
//   } catch (error) {
//     console.error("Error fetching impact data:", error);
//     return [];
//   }
// }
