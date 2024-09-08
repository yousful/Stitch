import { ReactNode } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./ui/card";
import { Package } from 'lucide-react';

interface MetricCardProps {
    icon: ReactNode;
    label: string;
    value: string | number;
    description: string;
    backgroundColor: string
  }
  
export function MetricCard({ icon, label, value, description, backgroundColor }: MetricCardProps) {
    return (
        <Card className="flex items-center p-4 space-x-4" style={{ backgroundColor }}>
        <div className="text-primary">
          {icon}
        </div>
        <div className="flex-1">
          <CardHeader className="p-0">
            <CardTitle className="text-xl">{value}</CardTitle>
            <CardDescription className="text-sm">{label}</CardDescription>
          </CardHeader>
          {/* <div className="text-xs text-muted-foreground pt-1">
            {description}
          </div> */}
        </div>
      </Card>
    );
  }