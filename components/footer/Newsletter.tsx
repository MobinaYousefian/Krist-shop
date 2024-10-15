"use client"
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {Form, FormControl, FormField, FormItem, FormMessage} from "@/components/ui/form";
import {toast} from "@/hooks/use-toast";

export const Newsletter = () => {
    const formSchema = z.object({
        email: z.string().email({message: "Invalid email address"})
    });

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {email: "",},
    });

    const onSubmit = (value: z.infer<typeof formSchema>) => {
        toast({
            title: "Success!",
            description: "You're now one of the Krist's family!"
        })
        console.log(`value: ${value.email} => goes to backend`)
    };

    return (
        <div className={"text-slate-50 sm:w-1/2 lg:w-1/3 max-w-sm sm:max-w-64 w-full"}>
            <p className={"font-semibold mb-3"}>Newsletter</p>
            <p className={"text-xs mb-4 opacity-75"}>
                Enter your email below to be the first to know about new collections and product lunches.
            </p>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className={"sm:flex sm:justify-between sm:items-baseline lg:block"}>
                    <FormField
                        control={form.control}
                        name="email"
                        render={({field}) => (
                            <FormItem>
                                <FormControl>
                                    <Input placeholder="Your email" {...field}
                                           className={"lg:w-full text-slate-50 placeholder:text-slate-50 placeholder:opacity-80"}/>
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    <Button type={"submit"} size={"sm"} variant={"secondary"} className={"my-2 sm:mx-2 sm:my-0 lg:mx-0 lg:my-2"}>
                        Subscribe
                    </Button>
                </form>
            </Form>
        </div>
    )
}