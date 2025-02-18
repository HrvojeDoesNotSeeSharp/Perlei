using System;
using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.CodeAnalysis.CSharp;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers;

public class ReservationsController(AppDbContext context) : BaseApiController
{
    [HttpGet]
    public async Task<ActionResult<List<Reservation>>> GetReservations()
    {
        return await context.Reservations.ToListAsync();
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Reservation>> GetReservationDetail(string id)
    {
        var reservation = await context.Reservations.FindAsync(id);

        if (reservation == null) return NotFound();
        
        return reservation;
    }

    [HttpPost]
    public async Task<ActionResult> CreateReservation(Reservation reservation)
    {
        if (reservation == null) return NotFound();

        context.Reservations.Add(reservation);

        await context.SaveChangesAsync();
        
        return CreatedAtAction(nameof(GetReservationDetail), new {id = reservation.Id}, reservation);
    }

    [HttpPut("{id}")]
    public async Task<ActionResult> EditReservation(string id, Reservation reservation)
    {
        var existingReservation = await context.Reservations.FindAsync(id);

        if (existingReservation == null) return NotFound();

        existingReservation.Ime = reservation.Ime;
        existingReservation.Usluga = reservation.Usluga;
        existingReservation.BrojMobitela = reservation.BrojMobitela;
        existingReservation.DateTime = reservation.DateTime;
        existingReservation.Email = reservation.Email;
        existingReservation.Napomena = reservation.Napomena;

        await context.SaveChangesAsync();
        
        return NoContent();
    }

    [HttpDelete("{id}")]
    public async Task<ActionResult> DeleteReservation(string id)
    {
        var reservation = await context.Reservations.FindAsync(id);

        if (reservation == null) return NotFound();

        context.Reservations.Remove(reservation);

        await context.SaveChangesAsync();
        
        return NoContent();
    }

}
