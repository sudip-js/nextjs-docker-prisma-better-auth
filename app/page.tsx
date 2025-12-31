import { Button } from "@/components/ui/button";
import prisma from "@/lib/db";

const HomePage = async () => {
  const posts = await prisma.post.findMany();
  console.log({ posts });
  return (
    <div>
      <Button>Button</Button>
    </div>
  );
};

export default HomePage;
