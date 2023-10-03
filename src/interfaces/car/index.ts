import { BookingInterface } from 'interfaces/booking';
import { ReportInterface } from 'interfaces/report';
import { ReviewInterface } from 'interfaces/review';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface CarInterface {
  id?: string;
  model?: string;
  year: number;
  color?: string;
  mileage?: number;
  user_id: string;
  created_at?: any;
  updated_at?: any;
  booking?: BookingInterface[];
  report?: ReportInterface[];
  review?: ReviewInterface[];
  user?: UserInterface;
  _count?: {
    booking?: number;
    report?: number;
    review?: number;
  };
}

export interface CarGetQueryInterface extends GetQueryInterface {
  id?: string;
  model?: string;
  color?: string;
  user_id?: string;
}
