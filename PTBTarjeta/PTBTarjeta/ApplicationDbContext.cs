using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using PTBTarjeta.Models;

namespace PTBTarjeta
{
	public class ApplicationDbContext: DbContext
	{
		//Mapeo modelo con BD
		public DbSet<TarjetaCredito> TarjetaCredito { get; set; }

		public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
		{
		}
	}
}
