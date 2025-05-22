import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    await prisma.clothes.deleteMany({});
  await prisma.conditions.deleteMany({});
  await prisma.sizes.deleteMany({});

  const sizes = await prisma.sizes.createMany({
    data: [
      { name: 'XS' },
      { name: 'S' },
      { name: 'M' },
      { name: 'L' },
      { name: 'XL' },
      { name: 'XXL' },
    ],
    skipDuplicates: true,
  });

  const conditions = await prisma.conditions.createMany({
    data: [
      { name: 'Новое' },
      { name: 'Идеальное' },
      { name: 'Следы носки' },
    ],
    skipDuplicates: true,
  });

  const clothes = await prisma.clothes.createMany({
    data: [
      {
        name: 'Футболка хлопковая',
        brand: 'Nike',
        description: 'Белая хлопковая футболка с круглым вырезом',
        condition_id: 1,
        size_id: 3,
        cost: 800,
        price: 1999,
        is_sold: false,
        is_reserved: false,
      },
      {
        name: 'Джинсы скинни',
        brand: "Levi's",
        description: 'Синие облегающие джинсы с потертостями',
        condition_id: 2,
        size_id: 4,
        cost: 2500,
        price: 4500,
        is_sold: false,
        is_reserved: true,
      },
      {
        name: 'Куртка зимняя',
        brand: 'The North Face',
        description: 'Теплая пуховая куртка черного цвета',
        condition_id: 1,
        size_id: 5,
        cost: 7500,
        price: 12000,
        is_sold: true,
        is_reserved: false,
      },
      {
        name: 'Платье летнее',
        brand: 'Zara',
        description: 'Легкое хлопковое платье в цветочек',
        condition_id: 1,
        size_id: 2,
        cost: 1500,
        price: 3500,
        is_sold: false,
        is_reserved: false,
      },
      {
        name: 'Штаны тренировочные',
        brand: 'Adidas',
        description: 'Черные штаны с лампасами',
        condition_id: 3,
        size_id: 4,
        cost: 1800,
        price: 3200,
        is_sold: false,
        is_reserved: false,
      },
    ],
    skipDuplicates: true,
  });

  console.log({ sizes, conditions, clothes });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error('Error seeding database:', e);
    await prisma.$disconnect();
    process.exit(1);
  });
