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
    public async Task<ActionResult<Reservation>> GetActivityDetail(string id)
    {
        var reservation = await context.Reservations.FindAsync(id);

        if (reservation == null) return NotFound();
        
        return reservation;
    }

}
