using System;
using Domain;

namespace Persistence;

public class DbInitializer
{
    public static async Task SeedData(AppDbContext context)
    {
        if (context.Reservations.Any()) return;

        var reservations = new List<Reservation>
        {
            new(){
                Ime = "Ivan",
                Usluga = "Manikura",
                DateTime = DateTime.Now.AddDays(1),
                Email = "ante@gmail.com",
                BrojMobitela = "0996807870",
                Napomena = "Mozda zakasnim"
            },
            new(){
                Ime = "Hrvoje",
                Usluga = "Pedikura",
                DateTime = DateTime.Now.AddMonths(2),
                Email = "hrvoje@gmail.com",
                BrojMobitela = "0994832923",
                Napomena = ""
            },
            new(){
                Ime = "Darija",
                Usluga = "Pedikura",
                DateTime = new DateTime(2025, 02, 22, 16, 45, 0),
                Email = "darija@gmail.com",
                BrojMobitela = "0984372384",
                Napomena = "Dolazim na vrijeme"
            }

        };

        context.Reservations.AddRange(reservations);

        await context.SaveChangesAsync();
    }
}
