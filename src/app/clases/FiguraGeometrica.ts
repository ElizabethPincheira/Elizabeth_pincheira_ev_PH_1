class FiguraGeometrica {
    nombre : string;
    constructor ( nombre : string ){
        this.nombre = nombre;
    }
        
    calcularPerimetro():void{
        console.log("retorno del metodo calcular perimetro la clase padre deberia decir circulo==",miFigura); 
    }

}


const miFigura = new FiguraGeometrica("circulo");
console.log("retorno de del metodo desde instancia circulo//",miFigura.calcularPerimetro())


