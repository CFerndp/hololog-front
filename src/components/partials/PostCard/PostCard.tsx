import React from "react";
import { PostCardProps } from "./types";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Typography from "@/components/ui/typography";
import Image from "next/image";

const PostCard = ({
  title,
  image = "/no-img.png",
  description,
  createdAt,
  editedAt,
}: PostCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-row">
        <Image src={image} alt={title} width={300} height={300} />
        <CardDescription className="ml-2">{description}</CardDescription>
      </CardContent>
      <CardFooter className="flex flex-col items-start justify-between">
        <Typography.Muted>
          Creado: {createdAt.toLocaleDateString()}
        </Typography.Muted>
        {editedAt && (
          <Typography.Muted>
            Modificado: {editedAt.toLocaleDateString()}
          </Typography.Muted>
        )}
      </CardFooter>
    </Card>
  );
};

export default PostCard;
