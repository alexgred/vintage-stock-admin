'use client';

import Button from '../Button/Button';
import { PrinterOutlined } from '@ant-design/icons';
import { Divider, QRCode, Space } from 'antd';
import { productSold, productReserved, productDelete } from '@/actions';
import { ROUTES } from '@/config';

function printQRCode() {
  const canvas = document
    .getElementById('qrcode')
    ?.querySelector<HTMLCanvasElement>('canvas');

  const url = canvas!.toDataURL();
  const printWindow = window.open('', '_blank');
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

  printWindow!.document.write(printContent);
  printWindow!.document.close();

  printWindow!.onload = function () {
    printWindow!.print();
    printWindow!.onafterprint = function () {
      printWindow!.close();
    };
  };
}

export default function ButtonsClothes({
  id,
  sold,
  reserved,
}: {
  id: number;
  sold: boolean;
  reserved: boolean;
}): React.ReactNode {

  return (
    <Space id="qrcode" size="middle">
      <Button variant="solid" color="primary" onClick={() => productSold(id)} disabled={sold}>
        Продано
      </Button>
      <Button
        variant="solid"
        color="primary"
        onClick={() => productReserved(id)}
        disabled={sold ||reserved}>
        Забронировано
      </Button>

      <Divider type="vertical" />

      <Button
        href={`${ROUTES.PRODUCTS}/${id}/edit`}
        variant="solid"
        color="primary">
        Изменить
      </Button>
      <Button variant="solid" htmlType="button" color="danger" onClick={() => productDelete(id)}>
        Удалить
      </Button>
      <Button
        variant="solid"
        color="default"
        shape="circle"
        onClick={printQRCode}
        icon={<PrinterOutlined />}
      />

      <QRCode value={`${ROUTES.PRODUCTS}/${id}`} bgColor="#000000" />
    </Space>
  );
}
