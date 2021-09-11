/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Modelo;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.sql.PreparedStatement;

/**
 *
 * @author Cristina
 */
public class Modelo {
    
    public ArrayList<Producto> listaProductos(){
        ArrayList <Producto> lista = new ArrayList<>();
        
        ConexionBD conexion = new ConexionBD();
        conexion.conectar();
        
        String sql = "SELECT * FROM productos";
        try{
            Statement stm = conexion.getConexion().createStatement();
            ResultSet rs= stm.executeQuery(sql);
            while(rs.next()){
                Producto pro =new Producto();
                pro.setId(rs.getInt("Id"));
                pro.setNombre(rs.getString("nombre"));
                pro.setCantidad(rs.getInt("cantidad"));
                pro.setCategoria(rs.getString("categoria"));
                pro.setPrecio(rs.getDouble("precio"));
                lista.add(pro);
            }   
        }
        catch(SQLException exception){
            System.out.println("Error: " + exception.getMessage());
        }
        return lista;
    }
    
    public void delete (Producto pro){
        ConexionBD conex = new ConexionBD();
        conex.conectar();
        String sql= "DELETE FROM  productos where id=?";
        try{
            PreparedStatement prepast = conex.getConexion().prepareStatement(sql);
            prepast.setInt(1, pro.getId());
            prepast.executeUpdate();
        }catch(SQLException excepcion){
            System.out.println("ocurrio error en el delete"+excepcion.getMessage());
        }
        conex.desconectar();
    }    
    
    public void update (Producto pro){
        ConexionBD conex = new ConexionBD();
        conex.conectar();
        String sql= "UPDATE productos set nombre=?, cantidad=?, categoria=?, precio=? where id=?";
        try{
            PreparedStatement prepast = conex.getConexion().prepareStatement(sql);
            prepast.setString(1, pro.getNombre());
            prepast.setInt(2, pro.getCantidad());
            prepast.setString(3, pro.getCategoria());
            prepast.setDouble(4, pro.getPrecio());
            prepast.setInt(5, pro.getId());
            prepast.executeUpdate();
        }catch(SQLException excepcion){
            System.out.println("pcurrio error en el update"+excepcion.getMessage());
        }
        conex.desconectar();
    }
    
    public void insert (Producto pro){
        ConexionBD conex = new ConexionBD();
        conex.conectar();

        String sql="INSERT INTO productos(id, nombre, cantidad, categoria, precio) VALUES (?,?,?,?,?)";
        try{
            PreparedStatement prepast = conex.getConexion().prepareStatement(sql);
            prepast.setInt(1, pro.getId());
            prepast.setString(2, pro.getNombre());
            prepast.setInt(3, pro.getCantidad());
            prepast.setString(4, pro.getCategoria());
            prepast.setDouble(5, pro.getPrecio());
            prepast.executeUpdate();
        }catch(SQLException excepcion){
            System.out.println("ocurrio error en el insert "+excepcion.getMessage());
        }
        conex.desconectar();        
    }
   
}
