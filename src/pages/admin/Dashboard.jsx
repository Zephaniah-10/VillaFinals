import { Box, Typography, Card, CardContent, Grid } from "@mui/material";

function Dashboard() {
    return (
        <Box sx={{ padding: 4 }}>
            <Typography variant="h1" gutterBottom>
                Dashboard
            </Typography>

            <Grid container spacing={4}>
                {/* Card 1: Total Sales */}
                <Grid item xs={12} sm={6} md={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5" component="div">
                                Total Sales
                            </Typography>
                            <Typography variant="h6" color="text.secondary">
                                $5,000
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                {/* Card 2: Products Sold */}
                <Grid item xs={12} sm={6} md={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5" component="div">
                                Products Sold
                            </Typography>
                            <Typography variant="h6" color="text.secondary">
                                250 items
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                {/* Card 3: Customers */}
                <Grid item xs={12} sm={6} md={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5" component="div">
                                Customers
                            </Typography>
                            <Typography variant="h6" color="text.secondary">
                                500 users
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Dashboard;
