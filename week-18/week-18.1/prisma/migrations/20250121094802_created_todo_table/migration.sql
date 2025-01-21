-- CreateTable
CREATE TABLE "todo" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "isDone" BOOLEAN NOT NULL,

    CONSTRAINT "todo_pkey" PRIMARY KEY ("id")
);
