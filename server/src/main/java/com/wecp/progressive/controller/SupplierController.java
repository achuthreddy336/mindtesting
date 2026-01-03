package com.wecp.progressive.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.wecp.progressive.entitiy.Order;
import com.wecp.progressive.service.OrderService;

import java.util.List;

@RestController
public class SupplierController {

    @Autowired
    private OrderService orderService;

    @GetMapping("/api/supplier/orders")
    public ResponseEntity<List<Order>> getAllOrders() {
        List<Order> orders = orderService.getAllOrders();
        return new ResponseEntity<>(orders, HttpStatus.OK);
    }

    @PutMapping("/api/supplier/order/update/{orderId}")
    public ResponseEntity<Order> updateOrderStatus(@PathVariable Long orderId, @RequestParam String newStatus) {
        Order updatedOrder = orderService.updateOrderStatus(orderId, newStatus);
        return new ResponseEntity<>(updatedOrder, HttpStatus.OK);
    }
}
