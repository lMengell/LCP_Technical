using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace LaneClarkAndPeacockTechnical
{
    public class DatabaseContext : DbContext
    {
        public string DatabasePath { get; set; }

        public DbSet<ClientDetails> ClientDetails { get; set; }

        public DatabaseContext()
        {
            var folder = Environment.SpecialFolder.LocalApplicationData;
            var path = Environment.GetFolderPath(folder);
            DatabasePath = System.IO.Path.Join(path, "lane_clark_and_peacock_technical.db");
        }

        protected override void OnConfiguring(DbContextOptionsBuilder options)
        {
            //options.LogTo()
            options.UseSqlite($"Data Source={DatabasePath}");
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<ClientDetails>()
                .HasKey(c => c.ClientDetailsId)
                .HasName("ClientDetailsId");
        }
    }
}
