import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {Link} from "react-router-dom";

export default function ResetPassword() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-background p-4">
            <Card className="w-full max-w-md">
                <CardHeader className="text-center">
                    <CardTitle className="text-2xl">Сброс пароля</CardTitle>
                    <CardDescription>
                        Введите ваш email для получения инструкций по сбросу пароля
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
                </CardContent>
                <CardFooter className="flex flex-col space-y-4">
                    <Button className="w-full">
                        Отправить
                    </Button>
                    <p className="text-sm text-muted-foreground text-center">
                        <span className="me-2">Помните пароль?</span>
                        <Link to="/login" className="underline underline-offset-4 hover:text-primary">Войти</Link>
                    </p>
                </CardFooter>
            </Card>
        </div>
    )
}
