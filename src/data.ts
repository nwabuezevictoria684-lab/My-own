export interface Transaction {
  id: string;
  type: 'deposit' | 'withdrawal' | 'payment' | 'transfer';
  amount: number;
  date: string;
  description: string;
  status: 'completed' | 'pending' | 'failed';
}

export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  accountNumber: string;
  balance: number;
  avatar: string;
  transactions: Transaction[];
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  image: string;
  category: string;
}

export const users: User[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    password: 'password123',
    accountNumber: '1234567890',
    balance: 5240.50,
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    transactions: [
      { id: 't1', type: 'deposit', amount: 1200.00, date: '2024-05-15', description: 'Monthly Salary', status: 'completed' },
      { id: 't2', type: 'payment', amount: 45.99, date: '2024-05-16', description: 'Netflix Subscription', status: 'completed' },
      { id: 't3', type: 'withdrawal', amount: 100.00, date: '2024-05-17', description: 'ATM Withdrawal', status: 'completed' },
      { id: 't4', type: 'transfer', amount: 250.00, date: '2024-05-18', description: 'Rent Payment', status: 'pending' },
    ]
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    password: 'password123',
    accountNumber: '0987654321',
    balance: 12850.75,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    transactions: [
      { id: 't5', type: 'deposit', amount: 3500.00, date: '2024-05-10', description: 'Freelance Project', status: 'completed' },
      { id: 't6', type: 'payment', amount: 120.50, date: '2024-05-12', description: 'Grocery Store', status: 'completed' },
    ]
  },
  {
    id: '3',
    name: 'Admin User',
    email: 'admin@bank.com',
    password: 'adminpassword',
    accountNumber: '0000000000',
    balance: 1000000.00,
    avatar: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    transactions: []
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'How to Save for Your First Home',
    excerpt: 'Planning to buy your first house? Here are the top 10 tips to save for a down payment.',
    content: 'Full content about saving for a home...',
    author: 'Sarah Johnson',
    date: '2024-05-20',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800',
    category: 'Saving'
  },
  {
    id: 2,
    title: 'Understanding Modern Investment Strategies',
    excerpt: 'From crypto to traditional stocks, learn how to diversify your portfolio effectively.',
    content: 'Full content about investment strategies...',
    author: 'Mark Thompson',
    date: '2024-05-18',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    category: 'Investing'
  },
  {
    id: 3,
    title: 'The Future of Digital Banking',
    excerpt: 'Discover how AI and blockchain are reshaping the financial landscape.',
    content: 'Full content about digital banking...',
    author: 'David Chen',
    date: '2024-05-15',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800',
    category: 'Technology'
  }
];
