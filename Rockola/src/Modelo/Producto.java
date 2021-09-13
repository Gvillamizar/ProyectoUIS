/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Modelo;


/**
 *
 * @author Cristina
 */
public class Producto {
    //Atributos
    private int id;
    private String nombre;
    private int cantidad;
    private String categoria;    
    private double precio;    
    
    //Propiedades Set y Get
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public int getCantidad() {
        return cantidad;
    }

    public void setCantidad(int cantidad) {
        this.cantidad = cantidad;
    }

    public String getCategoria() {
        return categoria;
    }

    public void setCategoria(String categoria) {
        this.categoria = categoria;
    }

    public double getPrecio() {
        return precio;
    }

    public void setPrecio(double precio) {
        this.precio = precio;
    }
    
    //Contructores 
    public Producto() {
    }

    public Producto(int id, String nombre, int cantidad, String categoria, double precio) {
        this.id = id;
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.categoria = categoria;
        this.precio = precio;
    }
    
    public Producto(String nombre, int cantidad, String categoria, double precio) {
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.categoria = categoria;
        this.precio = precio;
    }
    
    //no elimine ni modifique este método
    @Override
    public String toString(){
        return "Producto {" + "id=" + id + ", nombre="  + nombre + ", cantidad= " + cantidad + ", categoria=" + categoria + ", precio=" + precio + "}";
    }
}
