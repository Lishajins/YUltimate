import { NextApiRequest, NextApiResponse } from "next";

let children = [
  { id: 1, name: "Aarav", age: 10, gender: "Male" },
  { id: 2, name: "Diya", age: 9, gender: "Female" },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    res.status(200).json(children);
  } else if (req.method === "POST") {
    const newChild = { id: children.length + 1, ...req.body };
    children.push(newChild);
    res.status(201).json(newChild);
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}

