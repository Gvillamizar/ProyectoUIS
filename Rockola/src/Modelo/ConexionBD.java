/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Modelo;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

/**
 *
 * @author Cristina
 */
public class ConexionBD {
    private Connection conexion;
    
    //Método conectar
    public void conectar(){
        String db = "Reto5db.db";
        try{
            conexion = DriverManager.getConnection("jdbc:sqlite:"+db);
            if(conexion != null){
                System.out.println("Conexión Exitosa");
            }
        }
        catch(SQLException exception){
            System.out.println("Ocurrio un error al establer la conexión"+exception.getMessage());
        }
    }
    public void desconectar(){
        try{
            if(conexion != null){
                conexion.close();
                System.out.println("Desconexión Exitosa");
            }
        }
        catch(SQLException exception){
            System.out.println("Ocurrio un error al establer la conexión"+exception.getMessage());
        }        
    }

    public Connection getConexion() {
        return conexion;
    }
    
}
