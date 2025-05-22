import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
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
    data: [{ name: 'Новое' }, { name: 'Идеальное' }, { name: 'Следы носки' }],
    skipDuplicates: true,
  });

  const clothes = await prisma.clothes.createMany({
    data: [
      {
        name: 'Футболка хлопковая',
        brand: 'Nike',
        description: 'Белая хлопковая футболка с круглым вырезом',
        conditionId: 1,
        sizeId: 3,
        cost: 800,
        price: 1999,
        sold: false,
        reserved: false,
      },
      {
        name: 'Джинсы скинни',
        brand: "Levi's",
        description: 'Синие облегающие джинсы с потертостями',
        conditionId: 2,
        sizeId: 4,
        cost: 2500,
        price: 4500,
        sold: false,
        reserved: true,
      },
      {
        name: 'Куртка зимняя',
        brand: 'The North Face',
        description: 'Теплая пуховая куртка черного цвета',
        conditionId: 1,
        sizeId: 5,
        cost: 7500,
        price: 12000,
        sold: true,
        reserved: false,
      },
      {
        name: 'Платье летнее',
        brand: 'Zara',
        description: 'Легкое хлопковое платье в цветочек',
        conditionId: 1,
        sizeId: 2,
        cost: 1500,
        price: 3500,
        sold: false,
        reserved: false,
      },
      {
        name: 'Штаны тренировочные',
        brand: 'Adidas',
        description: 'Черные штаны с лампасами',
        conditionId: 3,
        sizeId: 4,
        cost: 1800,
        price: 3200,
        sold: false,
        reserved: false,
      },
    ],
    skipDuplicates: true,
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
