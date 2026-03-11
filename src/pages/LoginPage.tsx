import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function LoginPage() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-background p-4">
            <Card className="w-full max-w-md">
                <CardHeader className="text-center">
                    <CardTitle className="text-2xl">Вход</CardTitle>
                    <CardDescription>
                        Введите свои данные для доступа к системе
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="Введите email"
                            required
                        />
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center">
                            <Label htmlFor="password">Пароль</Label>
                            <Link to="/password-reset" className="ml-auto text-sm underline-offset-4 hover:underline">Забыл пароль?</Link>
                        </div>
                        <Input
                            id="password"
                            type="password"
                            placeholder="Введите пароль"
                            required
                        />
                    </div>
                </CardContent>
                <CardFooter className="flex flex-col space-y-4">
                    <Button className="w-full">
                        Войти
                    </Button>
                    <p className="text-sm text-muted-foreground text-center">
                        <span className="me-2">Нет аккаунта?</span>
                        <Link to="/signup" className="underline underline-offset-4 hover:text-primary">Зарегистрироваться</Link>
                    </p>
                </CardFooter>
            </Card>
        </div>
    )
}
