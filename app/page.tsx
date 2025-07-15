"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "@/app/globals.css";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/auth/login");
  };
  return (
    <>
      <Navbar />
      <main className="flex-grow container pt-5  pb-10 text-center">
        <header className="mb-5">
          <h1 className="display-4 fw-bold">Welcome to SupaNext</h1>
          <p className="lead">
            A Next.js application with Supabase Integration
          </p>
          <button className="btn btn-primary btn-lg" onClick={handleClick}>
            Get Started
          </button>
        </header>

        <section className="row g-4">
          <div className="col-md-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Fast & Secure</h5>
                <p className="card-text">
                  Built with Next.js and Supabase, ensuring high performance and
                  security.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Authentication</h5>
                <p className="card-text">
                  Secure user authentication with Supabase, including email and
                  password login.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Data & Storage</h5>
                <p className="card-text">
                  Manage your data and files effortlessly with Supabase's
                  powerful database and storage solutions.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
