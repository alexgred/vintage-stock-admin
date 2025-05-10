'use client';

import Button from '../Button/Button';
import { PrinterOutlined } from '@ant-design/icons';
import { routes } from '@/config';
import { Divider, QRCode, Space } from 'antd';

function printQRCode() {
  const canvas = document
    .getElementById('myqrcode')
    ?.querySelector<HTMLCanvasElement>('canvas');

  const url = canvas!.toDataURL();

  // Создаем новое окно
  const printWindow = window.open('', '_blank');

  // Создаем HTML содержимое для печати
  const printContent = `
                <html>
                    <head>
                        <title>Печать</title>
                        <style>
                            img {
                                max-width: 100%;
                                height: auto;
                                margin: auto;
                                display: block;
                            }
                            @media print {
                                @page {
                                    margin: 0;
                                    size: auto;
                                }
                            }
                        </style>
                    </head>
                    <body>
                        <img src="${url}" />
                    </body>
                </html>
            `;

  // Записываем содержимое в новое окно
  printWindow!.document.write(printContent);
  printWindow!.document.close();

  // Запускаем печать после загрузки изображения
  printWindow!.onload = function () {
    printWindow!.print();
    printWindow!.onafterprint = function () {
      printWindow!.close();
    };
  };
}

export default function ButtonsClothes({
  id,
}: {
  id: number;
}): React.ReactNode {
  return (
    <Space id="myqrcode" size="middle">
      <Button href="/" variant="solid" color="primary">
        Продано
      </Button>
      <Button href="/" variant="solid" color="primary">
        Забронировано
      </Button>

      <Divider type="vertical" />

      <Button
        href={`${routes.PRODUCTS}/${id}/edit`}
        variant="solid"
        color="primary">
        Изменить
      </Button>
      <Button variant="solid" htmlType="button" color="danger">
        Удалить
      </Button>
      <Button
        variant="solid"
        color="default"
        shape="circle"
        onClick={printQRCode}
        icon={<PrinterOutlined />}
      />

      <QRCode value={`${routes.PRODUCTS}/${id}`} bgColor="#000000" />
    </Space>
  );
}
