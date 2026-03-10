import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {Link} from "react-router-dom";

export default function Signup() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-background p-4">
            <Card className="w-full max-w-md">
                <CardHeader className="text-center">
                    <CardTitle className="text-2xl">Регистрация</CardTitle>
                    <CardDescription>
                        Создайте новый аккаунт для доступа к системе
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="name">Имя</Label>
                        <Input
                            id="name"
                            type="text"
                            placeholder="Введите ваше имя"
                            required
                        />
                    </div>
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
                        <Label htmlFor="password">Пароль</Label>
                        <Input
                            id="password"
                            type="password"
                            placeholder="Введите пароль"
                            required
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="confirmPassword">Подтвердите пароль</Label>
                        <Input
                            id="confirmPassword"
                            type="password"
                            placeholder="Повторите пароль"
                            required
                        />
                    </div>
                </CardContent>
                <CardFooter className="flex flex-col space-y-4">
                    <Button className="w-full">
                        Зарегистрироваться
                    </Button>
                    <p className="text-sm text-muted-foreground text-center">
                        <span className="me-2">Уже есть аккаунт?</span>
                        <Link to="/login" className="underline underline-offset-4 hover:text-primary">Войти</Link>
                    </p>
                </CardFooter>
            </Card>
        </div>
    )
}
