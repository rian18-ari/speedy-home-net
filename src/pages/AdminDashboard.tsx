import { useState, useEffect } from "react";
import { ArrowLeft, Users, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface Registration {
  nama: string;
  whatsapp: string;
  alamat: string;
  paket: string;
}

const paketLabel: Record<string, string> = {
  basic: "Basic - 10 Mbps",
  family: "Family - 20 Mbps",
  pro: "Pro - 50 Mbps",
};

const AdminDashboard = () => {
  const [data, setData] = useState<Registration[]>([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("registrations") || "[]");
    setData(stored);
  }, []);

  const handleDelete = (index: number) => {
    const updated = data.filter((_, i) => i !== index);
    setData(updated);
    localStorage.setItem("registrations", JSON.stringify(updated));
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-10">
        <div className="flex items-center gap-4 mb-8">
          <a href="/">
            <Button variant="ghost" size="icon"><ArrowLeft className="w-5 h-5" /></Button>
          </a>
          <div>
            <h1 className="text-2xl font-bold text-foreground">Dashboard Admin</h1>
            <p className="text-muted-foreground text-sm">Data pelanggan yang mendaftar</p>
          </div>
        </div>

        <div className="bg-card rounded-2xl p-6" style={{ boxShadow: "var(--card-shadow)" }}>
          <div className="flex items-center gap-2 mb-6">
            <Users className="w-5 h-5 text-primary" />
            <span className="font-semibold text-foreground">{data.length} Pendaftar</span>
          </div>

          {data.length === 0 ? (
            <p className="text-muted-foreground text-center py-12">Belum ada data pendaftaran.</p>
          ) : (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>No</TableHead>
                    <TableHead>Nama</TableHead>
                    <TableHead>WhatsApp</TableHead>
                    <TableHead>Alamat</TableHead>
                    <TableHead>Paket</TableHead>
                    <TableHead>Aksi</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {data.map((r, i) => (
                    <TableRow key={i}>
                      <TableCell>{i + 1}</TableCell>
                      <TableCell className="font-medium">{r.nama}</TableCell>
                      <TableCell>{r.whatsapp}</TableCell>
                      <TableCell>{r.alamat}</TableCell>
                      <TableCell>{paketLabel[r.paket] || r.paket}</TableCell>
                      <TableCell>
                        <Button variant="ghost" size="icon" onClick={() => handleDelete(i)}>
                          <Trash2 className="w-4 h-4 text-destructive" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
