using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace PTBTarjeta.Models
{
	public class TarjetaCredito
	{
		public int Id { get; set; }
		[Required]
		public String Titular { get; set; }
		[Required]
		public String NumeroTarjeta { get; set; }
		[Required]
		public String FechaExpiracion { get; set; }
		[Required]
		public String cvv { get; set; }
	}
}
