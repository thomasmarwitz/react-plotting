import pdfmake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfmake.vfs = pdfFonts.pdfMake.vfs;

function getBase64Image() {
    return new Promise((resolve, reject) => {
         const img = new Image();
         const svgElement = document.querySelector('.apexcharts-svg');
         const imageBlobURL = 'data:image/svg+xml;charset=utf-8,' +
            encodeURIComponent(svgElement.outerHTML);
         img.onload = ()=> {
            var canvas = document.createElement('canvas');
            canvas.width = img.width;
            canvas.height = img.height;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0);
            const dataURL = canvas.toDataURL('image/png');
            resolve(dataURL);
         };
         img.onerror = (error) => {
           reject(error);
         };
         img.src = imageBlobURL;
       });
}

export async function showPdf() {
    const docDefinition = {
      content: [
        {
          text: 'PDF Generated with Image from Chart',
          fontSize: 20,
        },
        {
          image: await getBase64Image(),
          width: 500,
        },
      ],
    };
    pdfmake.createPdf(docDefinition).open();
}
