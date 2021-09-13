/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Rockola;

import Modelo.Modelo;
import Controlador.Controlador;
import Modelo.ConexionBD;
import Vista.JFrameProducto;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;


/**
 *
 * @author Cristina
 */
public class Rockola {
    
    public static void main(String[] args){
        JFrameProducto vista = new JFrameProducto();
        Modelo modelo= new Modelo();
        Controlador control = new Controlador (vista, modelo);
        
        
        /*ConexionBD conexion = new ConexionBD();
        conexion.conectar();
        
        /String sql = "SELECT * FROM productos";
        try{
            Statement stm = conexion.getConexion().createStatement();
            ResultSet rs= stm.executeQuery(sql);
            while(rs.next()){
                System.out.println(rs.getInt("Id"));
                System.out.println(rs.getString("nombre"));
            }
        }
        catch(SQLException Exception){
            System.out.println("Ocurrio error: "+ Exception.getMessage());
                    
        }
        conexion.desconectar();*/
    }
    
}
