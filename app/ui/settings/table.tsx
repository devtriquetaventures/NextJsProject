import { Frown, GanttChartSquare, KeyRound, User } from "lucide-react";
import SettingsButton from "./settings-buttons";


export default async function SettingsTable() {

  return (
    <main>
      <div className="p-4">
        <h1 className="text-xl font-bold">Configuracion</h1>
        <h3 className="text-sm dark:text-gray-300 pt-3">Maneja los ajustes generales de tu cuenta</h3>
      </div>
      <section className="grid grid-rows-2 grid-flow-col gap-4 pt-3">
      <SettingsButton href="/dashboard/profile" icon={<User />} title="Informacion Personal" subtitle="Configura tus datos personales"/>
      <SettingsButton href="/dashboard/settings/changepassword" icon={<KeyRound />} title="Cambiar contraseña" subtitle="Configura una nueva contraseña para tu cuenta" />
      <SettingsButton href="/dashboard/users" icon={<GanttChartSquare />} title="Gestión de usuarios" subtitle="Gestiona los usuarios registrados" />
      <SettingsButton href="#" icon={<Frown />} title="Regions" subtitle="Manage shipping, payment, and fulfillment across regions" />
      </section>
    </main>
  )
}