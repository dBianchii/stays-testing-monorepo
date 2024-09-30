'use client'

import { Button } from "~/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card"
import { Input } from "~/components/ui/input"
import { Select } from "~/components/ui/select"
import { CalendarIcon, ChevronRightIcon, ExternalLinkIcon, PencilIcon, PrinterIcon, SearchIcon, ThumbsUpIcon } from "lucide-react"

export function DashboardComponent() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-gray-900">Painel inicial</h1>
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="icon">
              <SearchIcon className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <span className="text-green-500 font-bold">+</span>
            </Button>
            <Button variant="outline" size="icon">
              <span className="text-blue-500 font-bold">$</span>
            </Button>
            <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm">13</span>
            <img src="/placeholder.svg?height=32&width=32" alt="User avatar" className="h-8 w-8 rounded-full" />
          </div>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <section className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-gray-900">Recepção</h2>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm">
                  <CalendarIcon className="h-4 w-4 mr-2" />
                  Hoje
                </Button>
                <Button variant="outline" size="sm">
                  <PrinterIcon className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm">
                  Ver tudo
                  <ChevronRightIcon className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-blue-600">Check-in</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold">0</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-blue-600">Checkout</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold">0</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-blue-600">In-house</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold">1</p>
                </CardContent>
              </Card>
            </div>
            <div className="mt-4 text-center">
              <ThumbsUpIcon className="inline-block h-6 w-6 text-gray-400" />
              <p className="text-sm text-gray-500">tudo certo</p>
            </div>
          </section>
          
          <section className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-gray-900">Reservas</h2>
              <Button variant="outline" size="sm">
                <ChevronRightIcon className="h-4 w-4" />
              </Button>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-blue-600">Novas</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold">0</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-blue-600">Incompletas</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold">1</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-blue-600">Atribuídas a você</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold">0</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-blue-600">Pedidos de alteração</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold">0</p>
                </CardContent>
              </Card>
            </div>
            <div className="mt-4 bg-white shadow overflow-hidden sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Guest</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Expected payment</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Vencimento</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">YK01H</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Gabriel Rezende</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">5 set</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">27 set 2024</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"></td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <Button variant="ghost" size="sm">
                        <ChevronRightIcon className="h-4 w-4" />
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
          
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Anúncios</h2>
            <Card>
              <CardContent className="p-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                  <div>
                    <label htmlFor="start-date" className="block text-sm font-medium text-gray-700">Data de início</label>
                    <Input id="start-date" type="date" defaultValue="2024-10-04" className="mt-1" />
                  </div>
                  <div>
                    <label htmlFor="end-date" className="block text-sm font-medium text-gray-700">Até</label>
                    <Input id="end-date" type="date" defaultValue="2024-10-06" className="mt-1" />
                  </div>
                  <div>
                    <label htmlFor="people" className="block text-sm font-medium text-gray-700">Pessoas</label>
                    <Select id="people">
                      <option>1 Pessoa</option>
                    </Select>
                  </div>
                </div>
                <div className="mt-4 flex justify-end">
                  <Button>Aplicar</Button>
                </div>
              </CardContent>
            </Card>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Canais</h2>
            <div className="space-y-4">
              <Card>
                <CardContent className="p-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-4">
                      <img src="/placeholder.svg?height=40&width=40" alt="Airbnb logo" className="h-10 w-10" />
                      <div>
                        <h3 className="text-lg font-semibold">Airbnb</h3>
                        <p className="text-sm text-green-600">Connected</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      <ExternalLinkIcon className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="mt-4">
                    <p className="text-sm text-gray-600">1 Reservations</p>
                    <p className="text-sm font-semibold text-green-600">+100% que mês passado</p>
                  </div>
                  <div className="mt-4">
                    <Button variant="outline" size="sm">Detalhes da conta</Button>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-4">
                      <img src="/placeholder.svg?height=40&width=40" alt="Google VR logo" className="h-10 w-10" />
                      <div>
                        <h3 className="text-lg font-semibold">Google VR</h3>
                        <p className="text-sm text-red-600">Disconnected</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      <ExternalLinkIcon className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="mt-4">
                    <p className="text-sm text-gray-600">1 Reservations</p>
                    <p className="text-sm font-semibold text-red-600">-50% que mês passado</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-lg font-semibold">Website</h3>
                      <a href="https://test5.stays.net" className="text-sm text-blue-600">https://test5.stays.net</a>
                    </div>
                    <Button variant="ghost" size="sm">
                      <ExternalLinkIcon className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="mt-4">
                    <p className="text-sm text-gray-600">15 Reservations</p>
                    <p className="text-sm font-semibold text-green-600">+275% que mês passado</p>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <div>
                      <span className="text-sm font-medium">Markup (correção de preço)</span>
                      <span className="ml-2 text-xs text-blue-600 bg-blue-100 px-2 py-1 rounded-full">121%</span>
                    </div>
                    <Button variant="ghost" size="sm">
                      <PencilIcon className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}