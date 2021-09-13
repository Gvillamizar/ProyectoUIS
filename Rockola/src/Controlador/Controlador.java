/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Controlador;

import Modelo.Modelo;
import Modelo.Producto;
import java.awt.event.ActionListener;
import Vista.JFrameProducto;
import java.awt.event.ActionEvent;
import java.awt.event.MouseEvent;
import java.awt.event.MouseListener;
import javax.swing.JOptionPane;
import javax.swing.table.DefaultTableModel;
import java.util.ArrayList;


/**
 *
 * @author Cristina
 */
public class Controlador implements ActionListener {
    //llamar clase vista
    
    JFrameProducto vista;
    Modelo modelo;
    ArrayList <Producto> lista;
            
    
    //ci¿onstructor
    
    public Controlador(JFrameProducto vista, Modelo modelo){
        this.vista = vista;
        this.modelo=modelo;
        iniciarVista();
    }
    
    public void iniciarVista(){
        vista.setVisible(true);
        vista.BtnGuardarRegistro.addActionListener(this);
        vista.BtnEliminar.addActionListener(this);
        vista.BtnActualizar.addActionListener(this);
        vista.BtnConsultar.addActionListener(this);
        vista.Tabla.addMouseListener(new MouseListener()
        {
            @Override
            public void mouseClicked(MouseEvent e){
                int posicion=vista.Tabla.getSelectedRow();
                Producto pro=lista.get(posicion);
                vista.TxtId.setText(String.valueOf(pro.getId()));
                vista.TxtNombreConsultar.setText(pro.getNombre());
                vista.TxtCantidad.setText(String.valueOf(pro.getCantidad()));
                vista.CmbCategoria.setSelectedItem(pro.getCategoria());
                vista.TxtPrecio.setText(String.valueOf(pro.getPrecio()));
            }
        
            @Override
            public void mousePressed(MouseEvent me){
            }
            
            @Override
            public void mouseReleased(MouseEvent me){
            }

            @Override
            public void mouseEntered(MouseEvent me){
            }

            @Override
            public void mouseExited(MouseEvent me){
            }});   
        llenarTabla();
    }
            
    public void llenarTabla(){
        lista = modelo.listaProductos();
        String [] columnas = new String []{"id","nombre","cantidad","Categoria","Precio"};
        Object [][] filas = new Object [][] {};
        DefaultTableModel tablaModelo = new DefaultTableModel(filas, columnas){
            @Override
            public boolean isCellEditable(int rowIndex, int columIndex ){
                return false;
            }
        };

        for(int i=0; i <lista.size(); i++){
            Producto pro = lista.get(i);
            Object[] fila1 = new Object[]{pro.getId(), pro.getNombre(), pro.getCantidad(), pro.getCategoria(), pro.getPrecio()};
            tablaModelo.addRow(fila1);
        }

        vista.Tabla.setModel(tablaModelo);
    }
                 
        
        //retire código

    @Override
    public void actionPerformed(ActionEvent e){
        if(e.getSource() == vista.BtnGuardarRegistro) {
            String nombre = vista.TxtNombreRegistro.getText();
            int cantidad = Integer.parseInt(vista.TxtCantidadRegistro.getText());
            String categoria = (String)vista.CmbCategoriaRegistro.getSelectedItem();
            double precio = Double.parseDouble(vista.TxtPrecioRegistro.getText());
            int id =  Integer.parseInt(vista.TxtIdRegistro.getText());
            
            Producto pro=new Producto (id, nombre, cantidad, categoria, precio);
            modelo.insert(pro);
            JOptionPane.showConfirmDialog(vista, "Producto Agregado");
            llenarTabla();
        }
        
        if(e.getSource()==vista.BtnEliminar){
            int boton = JOptionPane.showConfirmDialog(vista, "¿Deseas eliminar el producto?");
            if(boton==0){
                int indice=vista.Tabla.getSelectedRow();
                Producto pro= lista.get(indice);
                modelo.delete(pro);
                llenarTabla();
            }
        }
        
        if(e.getSource()==vista.BtnActualizar){
            int boton = JOptionPane.showConfirmDialog(vista, "¿Deseas actualizar el producto?");
            if(boton==0){
                int indice=vista.Tabla.getSelectedRow();
                Producto pro= lista.get(indice);
                pro.setNombre(vista.TxtNombreConsultar.getText());
                pro.setCantidad(Integer.parseInt(vista.TxtCantidad.getText()));
                pro.setCategoria((String)vista.CmbCategoria.getSelectedItem());
                pro.setPrecio(Double.parseDouble(vista.TxtPrecio.getText()));
                modelo.update(pro);
                JOptionPane.showMessageDialog(vista, "Actualizado");
                llenarTabla();
            }
        }   
        
        if(e.getSource()==vista.BtnConsultar){
                llenarTabla();
        }
    }

    //Código retirado
     /*   String [] columnas = new String []{"id","nombre","cantidad","Categoria","Precio"};
        Object [][] filas = new Object [][] {};
        DefaultTableModel tablaModelo = new DefaultTableModel(filas, columnas){
            public boolean isCellEditable(int rowIndex, int columIndex ){
                return false;
            }
        };
        
        Object[] fila1 = new Object [] {"5", "Cepillo", "50", "ASEO", "4500"};
        tablaModelo.addRow(fila1);
        
        vista.Tabla.setModel(tablaModelo);*/
}
