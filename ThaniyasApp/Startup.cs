using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Server.Kestrel.Core;
using Microsoft.AspNetCore.SpaServices.ReactDevelopmentServer;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using System;
using ThaniyasApp.Helper;
using ThaniyasApp.Middlewares;
using ThaniyasApp.Models;
using ThaniyasApp.Services.ApiConfig;

namespace IonApp
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllersWithViews();
            services.Configure<ClientAppSettings>(Configuration);
            var config = new ClientAppSettings();
            Configuration.Bind("ClientAppSettings", config);      //  <--- This
            services.AddSingleton(config);

            Config.ApiUrl = Configuration["ApiAppConfig:Url"];
            Config.APIKeyValue = Configuration["ApiAppConfig:KeyValue"];
            Config.SessionTimeout = int.Parse(Configuration["SessionTimeOut"]);
            Config.debugMode = bool.Parse(Configuration["debugMode"]);
            // In production, the React files will be served from this directory
            services.AddSpaStaticFiles(configuration =>
            {
                configuration.RootPath = "ClientApp/build";
            });
            services.AddHttpClient();
            services.AddTransient<ApiProxyMiddleware>();
            //services.AddHttpClient<IAccountService, AccountService>();
            services.AddAuthentication(CookieAuthenticationDefaults.AuthenticationScheme)
                .AddCookie(options =>
                {
                    options.LoginPath = "/";
                    options.LogoutPath = "/";
                    options.Cookie.Name = CookieAuthenticationDefaults.AuthenticationScheme;
                    options.Cookie.SameSite = SameSiteMode.None;
                    options.LoginPath = new Microsoft.AspNetCore.Http.PathString("/");
                    options.AccessDeniedPath = "/";
                    options.ReturnUrlParameter = "/";
                    options.AccessDeniedPath = "/";
                    options.LogoutPath = "/";
                    options.ExpireTimeSpan = TimeSpan.FromMinutes(Config.SessionTimeout);//set it less for testing purpose
                                                                                         // options.Events.OnRedirectToLogin
                });
            services.AddDistributedMemoryCache();
            services.AddSession(options => {
                options.Cookie.Name = CookieAuthenticationDefaults.AuthenticationScheme;
                options.IdleTimeout = TimeSpan.FromMinutes(Config.SessionTimeout);
                options.Cookie.HttpOnly = true;
            });
            services.AddSingleton<IApiConfiguration, DevelopmentApiConfiguration>();
            // If using Kestrel:
            services.Configure<KestrelServerOptions>(options =>
            {
                options.AllowSynchronousIO = true;
            });

            // If using IIS:
            services.Configure<IISServerOptions>(options =>
            {
                options.AllowSynchronousIO = true;
            });
            //In-Memory
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }
            app.UseCors("AlloeAll");
            app.UseHttpsRedirection();
            app.UseStaticFiles();
            app.UseSpaStaticFiles();
            app.UseAuthentication();
            app.UseSession();

            app.UseRouting();
            app.MapWhen(IsApiPath, builder => builder.UseMiddleware<ApiProxyMiddleware>());

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller}/{action=Index}/{id?}");
            });

            app.UseSpa(spa =>
            {
                spa.Options.SourcePath = "ClientApp";

                if (env.IsDevelopment())
                {
                    spa.UseReactDevelopmentServer(npmScript: "start");
                }
            });
        }

        private static bool IsApiPath(HttpContext httpContext)
        {
            return httpContext.Request.Path.Value.StartsWith(@"/api/", StringComparison.OrdinalIgnoreCase);
        }
    }
}
