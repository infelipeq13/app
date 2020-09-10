import type { ReactNode } from "react";

import { Container } from "src/components/Container";
import { Illustration } from "src/components/Illustration";
import type { IllustrationName } from "src/components/Illustration";

type Props = {
  children: ReactNode;
  description: string;
  illustrationName: IllustrationName;
  title: ReactNode;
};

export const Layout = ({
  children,
  description,
  illustrationName,
  title,
}: Props) => {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-100">
      <Container className="flex flex-col space-y-4">
        <div className="flex flex-col items-center justify-center flex-grow text-center">
          <Illustration name={illustrationName} />
          <h1 className="font-serif text-2xl font-black leading-9 text-gray-900">
            {title}
          </h1>
          <p className="text-sm leading-6 text-gray-800">{description}</p>
        </div>
        {children}
      </Container>
    </main>
  );
};
