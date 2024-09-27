"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PDFDocument = require('pdfkit');
class PDFGEnerator {
    constructor(res) {
        this.doc = new PDFDocument({
            margins: {
                top: 50,
                bottom: 50,
                left: 72,
                right: 72
            }
        });
        this.res = res;
        this.res.setHeader('Content-disposition', 'attachment; filename=example.pdf');
        this.res.setHeader('Content-type', 'application/pdf');
        this.doc.pipe(res);
    }
    setHeader() {
        this.doc.fontSize(17)
            .font('Times-Roman')
            .text('MINISTERSTVO VNÚTRA SLOVENSKEJ REPUBLIKY ŠTÁTNY ARCHÍV V PREŠOVE', {
            width: 450,
            align: 'center'
        })
            .moveDown(1);
        this.doc.moveTo(100, 100)
            .lineTo(500, 100)
            .stroke();
        this.doc.fontSize(12)
            .font('Helvetica-Bold')
            .text('Žiadosť o vypracovanie genealogického výskumu formou správy', {
            width: 450,
            align: 'center'
        })
            .moveDown(2);
    }
    setContents() {
        this.doc.font('Helvetica-Bold')
            .text('Meno a Priezvisko: ', {
            width: 400,
            continued: true
        })
            .font('Helvetica')
            .text(PDFGEnerator.PersonName, {
            width: 400,
        })
            .moveDown();
        this.doc.font('Helvetica-Bold')
            .text('Dátum: ', {
            width: 400,
            continued: true
        })
            .font('Helvetica')
            .text(new Date(PDFGEnerator.Date).toISOString()
            .replace(/T/, ' ')
            .replace(/\..+/, ''), {
            width: 400,
        })
            .moveDown();
        this.doc.font('Helvetica-Bold')
            .text('Popis: ', {
            width: 400,
            continued: true
        })
            .font('Helvetica')
            .text(PDFGEnerator.Description, {
            width: 450,
        });
    }
    setFooter() {
        this.doc.fontSize(10)
            .font('Helvetica')
            .text('Podpis:', 265, 700);
        this.doc.fontSize(17)
            .font('Helvetica')
            .text('Podpis', 370, 695);
        this.doc.moveTo(300, 715)
            .lineTo(500, 715)
            .dash(4, { space: 2 })
            .stroke();
    }
    endDocument() {
        this.doc.end();
    }
    resetDocument() {
        this.doc = new PDFDocument({
            margins: {
                top: 50,
                bottom: 50,
                left: 72,
                right: 72
            }
        });
    }
}
exports.default = PDFGEnerator;
